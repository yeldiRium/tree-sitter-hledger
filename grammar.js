/**
 * @file A parser for the hledger double-book accounting file format.
 * @author Hannes Leutloff <hannes.leutloff@yeldirium.de>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const comment_indicators = [";", "#", "*"];
const inline_comment_indicators = [";", "#"];

export default grammar({
  name: "hledger",

  extras: _ => [],

  rules: {
    source_file: $ => repeat($._definition),

    _definition: $ => choice(
      seq(optional($._spaces1), $._newline),
      $._directive,
      $.comment,
    ),

    //==================
    // Directives
    //==================
    _directive: $ => seq(
      choice(
        $.account_directive,
        $.include_directive,
      ),
      $._newline,
    ),

    account_directive: $ => seq(
      "account",
      $._spaces1,
      field("account_name", $.account_name),
      optional(field("comment", $.inline_comment)),
    ),

    include_directive: $ => seq(
      "include",
      $._spaces1,
      field("include_path", $.include_path),
      optional(field("comment", $.inline_comment)),
    ),

    //==================
    // Components
    //==================
    account_name: $ => seq(
      $.account_name_segment,
      repeat(seq($._account_name_separator, $.account_name_segment)),
    ),

    //==================
    // Comments
    //==================
    inline_comment: $ => seq(
      $._spaces2,
      choice(...inline_comment_indicators),
      optional(seq(
        $._spaces1,
        $._comment_content,
      )),
    ),
    comment: $ => prec.right(seq(
      choice(...comment_indicators),
      optional(seq(
        $._spaces1,
        $._comment_content,
      )),
    )),
    _comment_content: $ => prec.right(seq(
      $._comment_word,
      repeat(seq(
        $._spaces1,
        $._comment_word,
      ))
    )),

    inline_comment_with_tags: $ => seq(
      $._spaces2,
      choice(...inline_comment_indicators),
      optional(seq(
        $._spaces1,
        $._inline_comment_with_tags_content,
      )),
    ),
    _inline_comment_with_tags_content: $ => choice(
      seq(
        $._comment_word,
        optional(seq(
          $._spaces1,
          $._inline_comment_with_tags_content,
        )),
      ),
      seq(
        $.tag,
        optional(seq(
          ",", $._spaces1,
          $._inline_comment_with_tags_content,
        )),
      ),
    ),

    tag: $ => prec.left(seq(
      field("key", $.tag_key),
      field("value", optional($.tag_value)),
      optional(","),
    )),

    //==================
    // Tokens
    // Some of these seem unnecessarily complex. They are written to avoid
    // double-spaces, since hledger uses double spaces to recognize the
    // beginning of an inline comment.
    //==================
    include_path: _ => /[^ \n]+( [^ \n]+)*/,
    account_name_segment: _ => /[^\(\)\[\]: \n]+( [^\(\)\[\]: \n]+)*/,
    _account_name_separator: _ => /:/,
    _comment_word: _ => /[^: \n]+/,
    tag_key: _ => /[^:, \n]+:/,
    tag_value: _ => /[^,\n]+/,

    _spaces1: _ => / {1,}/,
    _spaces2: _ => / {2,}/,
    _newline: _ => /\n/,
  }
});
