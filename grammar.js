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

  inline: $ => [
    $.whitespace,
  ],

  supertypes: $ => [
    $.journal_item,
    $.transaction,
    $.directive,
  ],

  rules: {
    source_file: $ => repeat(choice($.journal_item, '\n')),

    journal_item: $ => choice(
      $.transaction,
      $.directive
    ),

    transaction: $ => choice($.transaction_plain),
    transaction_plain: $ => seq(
      $.date,
      optional(seq($.whitespace, $.status)),
      optional(seq($.whitespace, $.code)),
      optional(seq($.whitespace, $.description)),
      optional(seq($.whitespace, $.inline_comment)),
      '\n',
      repeat(choice(
        $.posting,
        seq($.whitespace, $.inline_comment, '\n'),
      ))
    ),

    date: $ => seq($._date, optional($.secondary_date)),
    secondary_date: $ => seq('=', $._date),
    _4d: _ => /\d{4}/,
    _2d: _ => /\d{2}/,
    _date_separator: _ => choice('-', '.', '/'),
    _date: $ => choice(
      seq($._4d, $._date_separator, $._2d, $._date_separator, $._2d),
      seq($._2d, $._date_separator, $._2d),
    ),

    status: _ => choice('*', '!'),
    code: _ => seq('(', /[^)]*/, ')'),
    description: _ => /[^*!\(;\n][^\s;\n]*( [^\s;\n]+)*/,

    posting: $ => seq(
      $.whitespace,
      optional(seq($.status, $.whitespace)),
      $.account,
      optional(choice(
        seq($.whitespace, $.balance_assignment),
        seq(
          $.whitespace, $.amount,
          optional(seq($.whitespace, choice(
            $.price,
            $.cost,
          ))),
          optional(seq($.whitespace, choice(
            $.balance_assertion,
            $.balance_assertion_subaccount_inclusive,
            $.balance_assertion_sole_commodity,
            $.balance_assertion_subaccount_inclusive_sole_commodity,
          ))),
        ),
      )),
      optional(seq($.whitespace, $.inline_comment)),
      '\n',
    ),

    account: _ => /[^ ;\n](\S \S \S|\S \S|\S)*/,
    balance_assignment: $ => seq('=', $.whitespace, $.amount),
    price: $ => seq('@', $.whitespace, $.amount),
    cost: $ => seq('@@', $.whitespace, $.amount),
    balance_assertion: $ => seq('=', $.whitespace, $.amount),
    balance_assertion_subaccount_inclusive: $ => seq('=*', $.whitespace, $.amount),
    balance_assertion_sole_commodity: $ => seq('==', $.whitespace, $.amount),
    balance_assertion_subaccount_inclusive_sole_commodity: $ => seq('==*', $.whitespace, $.amount),
    amount: $ => choice(
      seq($.quantity, $.whitespace, $.commodity),
      seq($.commodity, $.whitespace, $.quantity),
    ),
    quantity: _ => seq(
      optional(choice('+', '-')),
      /\d+([ .,]\d+)*/,
    ),
    commodity: _ => choice(/\p{L}+/u, /\p{Sc}/u, /"[^"\n]*"/),


    directive: $ => choice(
      $.directive_account,
    ),
    directive_account: $ => seq(
      'account', $.whitespace, $.account, optional(seq($.whitespace, $.inline_comment)), '\n',
      optional(repeat1(seq($.whitespace, $.inline_comment, '\n')))
    ),

    comment: _ => seq(
      choice(';', '#', '*'),
      repeat(choice(
        /[^\n]?/,
      )),
    ),

    inline_comment: _ => seq(
      ';',
      /[^\n]*/,
    ),

    whitespace: _ => repeat1(choice(' ', '\t')),
  }
});
