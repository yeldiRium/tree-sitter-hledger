/**
 * @file A parser for the hledger double-book accounting file format.
 * @author Hannes Leutloff <hannes.leutloff@yeldirium.de>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "hledger",

  extras: _ => [],

  rules: {
    source_file: $ => repeat($._definition),

    _definition: $ => choice(
      seq(optional($._spaces1), $._newline),
      $.account_directive,
    ),

    account_directive: $ => seq(
      "account",
      $._spaces1,
      field("account_name", $.account_name),
      optional(field("comment", $._inline_comment)),
      $._newline,
    ),

    account_name: $ => seq(
      $.account_name_segment,
      repeat(seq(":", $.account_name_segment)),
    ),

    _inline_comment: $ => seq(
      $._spaces2,
      choice(";", "#"),
      optional(seq(
        $._spaces1,
        $.comment,
      )),
    ),
    
    comment: $ => $._comment,

    _comment: $ => choice(
      seq(
        $._comment_word,
        optional(seq(
          $._spaces1,
          $._comment,
        )),
      ),
      seq(
        $.tag,
        optional(seq(
          ",", $._spaces1,
          $._comment,
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
