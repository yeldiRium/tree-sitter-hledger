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
      $.account_directive,
      $.comment,
    ),

    account_directive: $ => seq(
      "account",
      $._spaces1,
      field("account_name", $.account_name),
      optional(field("comment", $.inline_comment)),
      $._newline,
    ),

    account_name: $ => seq(
      $.account_name_segment,
      repeat(seq(":", $.account_name_segment)),
    ),

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

    account_name_segment: _ => /[^\(\)\[\]: \n]+( [^\(\)\[\]: \n]+)*/,
    _comment_word: _ => /[^: \n]+/,
    tag_key: _ => /[^:, \n]+:/,
    tag_value: _ => /[^,\n]+/,

    _spaces1: _ => / {1,}/,
    _spaces2: _ => / {2,}/,
    _newline: _ => /\n/,
  }
});
