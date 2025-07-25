# tree-sitter-hledger

Inspired by https://github.com/cbarrete/tree-sitter-ledger/, this is a from-scratch development of a tree-sitter grammar for [hledger](https://hledger.org/dev/hledger.html) files.

It is far from feature complete or even ready for use, which is why this readme is very empty for now.

## Completion Tracker

Pinned to hledger version 1.43.
Each test can be found under `test/corpus/<topic>.txt`.
Test names start with `<feature>` and have an optional suffix, if there are multiple test cases for a feature.

| Topic                   | Feature                                                | Has Testcase | Has Design | Implemented |
| :--                     | :--                                                    | --:          | --:        | --:         |
| Transaction             | Complete                                               | Yes          | No         | No          |
| Transaction             | Minimal                                                | Yes          | No         | No          |
| Transaction             | Common example                                         | Yes          | No         | No          |
| Transaction             | Description                                            | Yes          | No         | No          |
| Transaction             | Payee and note                                         | Yes          | No         | No          |
| Transaction             | Status                                                 | Yes          | No         | No          |
| Transaction             | Code                                                   | Yes          | No         | No          |
| Transaction             | Inline comment                                         | Yes          | No         | No          |
| Transaction             | Inline comment with tags                               | Yes          | No         | No          |
| Transaction             | Following comment                                      | Yes          | No         | No          |
| Transaction             | Following comment with tags                            | Yes          | No         | No          |
| Posting                 | Minimal                                                | No           | No         | No          |
| Posting                 | Multi-segment account name                             | No           | No         | No          |
| Posting                 | Amount                                                 | No           | No         | No          |
| Posting                 | Negative amount                                        | No           | No         | No          |
| Posting                 | Commodity                                              | No           | No         | No          |
| Posting                 | Complex commodity                                      | No           | No         | No          |
| Posting                 | Balance assignment                                     | No           | No         | No          |
| Posting                 | Balance assertion                                      | No           | No         | No          |
| Posting                 | Sub-account exclusive balance assertion                | No           | No         | No          |
| Posting                 | Sole commodity balance assertion                       | No           | No         | No          |
| Posting                 | Sub-account exclusive sole commodity balance assertion | No           | No         | No          |
| Posting                 | Cost with price per unit                               | No           | No         | No          |
| Posting                 | Cost with total cost                                   | No           | No         | No          |
| Posting                 | Status                                                 | No           | No         | No          |
| Posting                 | Unbalanced virtual posting                             | No           | No         | No          |
| Posting                 | Balanced virtual posting                               | No           | No         | No          |
| Posting                 | Inline comment                                         | Yes          | No         | No          |
| Posting                 | Inline comment with tags                               | No           | No         | No          |
| Posting                 | Posting date                                           | No           | No         | No          |
| Posting                 | Following comment                                      | Yes          | No         | No          |
| Posting                 | Following comment with tags                            | No           | No         | No          |
| Periodic Transaction    | Minimal                                                | No           | No         | No          |
| Periodic Transaction    | Description                                            | No           | No         | No          |
| Auto Posting            | Minimal                                                | No           | No         | No          |
| Directive Account       | Minimal                                                | No           | No         | No          |
| Directive Account       | Multi-segment name                                     | No           | No         | No          |
| Directive Account       | Multi-segment name with whitespace                     | No           | No         | No          |
| Directive Account       | Name including UTF-8                                   | No           | No         | No          |
| Directive Account       | Name with numeric content                              | No           | No         | No          |
| Directive Account       | Name with symbols                                      | No           | No         | No          |
| Directive Account       | Name with semicolon                                    | No           | No         | No          |
| Directive Account       | Single letter name                                     | No           | No         | No          |
| Directive Account       | Multiple spaces before account name                    | No           | No         | No          |
| Directive Account       | Inline comment                                         | Yes          | No         | No          |
| Directive Account       | Inline comment with tag                                | No           | No         | No          |
| Directive Account       | Following comment                                      | Yes          | No         | No          |
| Directive Account       | Following comment with tag                             | No           | No         | No          |
| Directive Alias         | Minimal                                                | No           | No         | No          |
| Directive Alias         | Multi-segment name                                     | No           | No         | No          |
| Directive Alias         | Regex                                                  | No           | No         | No          |
| Directive Alias         | End alias                                              | No           | No         | No          |
| Directive Alias         | Inline comment                                         | Yes          | No         | No          |
| Directive Apply Account | Minimal                                                | Yes          | No         | No          |
| Directive Apply Account | Multi-segment account name                             | Yes          | No         | No          |
| Directive Apply Account | Inline comment                                         | Yes          | No         | No          |
| Directive Commodity     | Minimal                                                | No           | No         | No          |
| Directive Commodity     | Without symbol                                         | No           | No         | No          |
| Directive Commodity     | Without decimals                                       | No           | No         | No          |
| Directive Commodity     | With space                                             | No           | No         | No          |
| Directive Commodity     | Without format                                         | No           | No         | No          |
| Directive Commodity     | With format subdirective                               | No           | No         | No          |
| Directive Commodity     | Inline comment                                         | Yes          | No         | No          |
| Directive D             | Minimal                                                | Yes          | No         | No          |
| Directive D             | Inline comment                                         | Yes          | No         | No          |
| Directive Decimal Mark  | Dot                                                    | Yes          | No         | No          |
| Directive Decimal Mark  | Comma                                                  | Yes          | No         | No          |
| Directive Decimal Mark  | Inline comment                                         | Yes          | No         | No          |
| Directive Include       | With file path                                         | No           | No         | No          |
| Directive Include       | With file path including glob                          | No           | No         | No          |
| Directive Include       | With file path including whitespace                    | No           | No         | No          |
| Directive Include       | With file path including special characters            | No           | No         | No          |
| Directive Include       | With file path including file format prefix            | No           | No         | No          |
| Directive Include       | With multiple spaces before file path                  | No           | No         | No          |
| Directive Include       | Inline comment                                         | Yes          | No         | No          |
| Directive P             | Minimal                                                | Yes          | No         | No          |
| Directive P             | Inline Comment                                         | Yes          | No         | No          |
| Directive Payee         | Minimal                                                | Yes          | No         | No          |
| Directive Payee         | With empty name                                        | Yes          | No         | No          |
| Directive Payee         | With special characters                                | Yes          | No         | No          |
| Directive Payee         | Inline comment                                         | Yes          | No         | No          |
| Directive Tag           | Minimal                                                | Yes          | No         | No          |
| Directive Tag           | Inline comment                                         | Yes          | No         | No          |
| Directive Y             | Minimal                                                | Yes          | No         | No          |
| Directive Y             | Inline comment                                         | Yes          | No         | No          |
| Date                    | YYYY-MM-DD                                             | No           | No         | No          |
| Date                    | YYYY/MM/DD                                             | No           | No         | No          |
| Date                    | YYYY.MM.DD                                             | No           | No         | No          |
| Date                    | MM-DD                                                  | No           | No         | No          |
| Date                    | MM/DD                                                  | No           | No         | No          |
| Date                    | MM.DD                                                  | No           | No         | No          |
| Date                    | Secondary Date                                         | No           | No         | No          |
| Comment                 | Semicolon                                              | Yes          | Yes        | No          |
| Comment                 | Hash                                                   | Yes          | Yes        | No          |
| Comment                 | Asterisk                                               | Yes          | Yes        | No          |
| Comment                 | Block                                                  | Yes          | Yes        | No          |
