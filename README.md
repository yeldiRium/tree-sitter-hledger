# tree-sitter-hledger

Inspired by https://github.com/cbarrete/tree-sitter-ledger/, this is a from-scratch development of a tree-sitter grammar for [hledger](https://hledger.org/dev/hledger.html) files.

It is far from feature complete or even ready for use, which is why this readme is very empty for now.

## Completion Tracker

Pinned to hledger version 1.43.
Each test can be found under `test/corpus/<topic>.txt`.
Test names start with `<feature>` and have an optional suffix, if there are multiple test cases for a feature.

| Topic                   | Feature                                               | Has Testcase | Has Design | Implemented |
| :--                     | :--                                                   | --:          | --:        | --:         |
| Transaction             | Complete                                              | Yes          | No         | No          |
| Transaction             | Minimal                                               | Yes          | No         | No          |
| Transaction             | Common example                                        | Yes          | No         | No          |
| Transaction             | Description                                           | Yes          | No         | No          |
| Transaction             | Payee and note                                        | Yes          | No         | No          |
| Transaction             | Status                                                | Yes          | No         | No          |
| Transaction             | Code                                                  | Yes          | No         | No          |
| Transaction             | Inline comment                                        | Yes          | No         | No          |
| Transaction             | Inline comment with tags                              | Yes          | No         | No          |
| Transaction             | Following comment                                     | Yes          | No         | No          |
| Transaction             | Following comment with tags                           | Yes          | No         | No          |
| Posting                 | Minimal                                               | Yes          | No         | No          |
| Posting                 | Multi-segment account name                            | Yes          | No         | No          |
| Posting                 | Amount                                                | Yes          | No         | No          |
| Posting                 | Negative amount                                       | Yes          | No         | No          |
| Posting                 | Commodity                                             | Yes          | No         | No          |
| Posting                 | Complex commodity                                     | Yes          | No         | No          |
| Posting                 | Balance assignment                                    | Yes          | No         | No          |
| Posting                 | Balance assertion                                     | Yes          | No         | No          |
| Posting                 | Subaccount-inclusive balance assertion                | Yes          | No         | No          |
| Posting                 | Sole commodity balance assertion                      | Yes          | No         | No          |
| Posting                 | Subaccount-inclusive sole commodity balance assertion | Yes          | No         | No          |
| Posting                 | Cost with price per unit                              | Yes          | No         | No          |
| Posting                 | Cost with total cost                                  | Yes          | No         | No          |
| Posting                 | Status                                                | Yes          | No         | No          |
| Posting                 | Unbalanced virtual posting                            | Yes          | No         | No          |
| Posting                 | Balanced virtual posting                              | Yes          | No         | No          |
| Posting                 | Inline comment                                        | Yes          | No         | No          |
| Posting                 | Inline comment with tags                              | Yes          | No         | No          |
| Posting                 | Posting date                                          | Yes          | No         | No          |
| Periodic Transaction    | Minimal                                               | Yes          | No         | No          |
| Periodic Transaction    | Description                                           | Yes          | No         | No          |
| Periodic Transaction    | Period                                                | No           | No         | No          |
| Auto Posting            | Minimal                                               | Yes          | No         | No          |
| Directive Account       | Minimal                                               | Yes          | No         | No          |
| Directive Account       | Multi-segment name                                    | Yes          | No         | No          |
| Directive Account       | Multi-segment name with whitespace                    | Yes          | No         | No          |
| Directive Account       | Name including UTF-8                                  | Yes          | No         | No          |
| Directive Account       | Name with numeric content                             | Yes          | No         | No          |
| Directive Account       | Name with symbols                                     | Yes          | No         | No          |
| Directive Account       | Name with semicolon                                   | Yes          | No         | No          |
| Directive Account       | Single letter name                                    | Yes          | No         | No          |
| Directive Account       | Multiple spaces before account name                   | Yes          | No         | No          |
| Directive Account       | Inline comment                                        | Yes          | No         | No          |
| Directive Account       | Inline comment with tags                              | Yes          | No         | No          |
| Directive Account       | Following comment                                     | Yes          | No         | No          |
| Directive Account       | Following comment with tags                           | Yes          | No         | No          |
| Directive Alias         | Minimal                                               | Yes          | No         | No          |
| Directive Alias         | Multi-segment name                                    | Yes          | No         | No          |
| Directive Alias         | Regex                                                 | Yes          | No         | No          |
| Directive Alias         | End alias                                             | Yes          | No         | No          |
| Directive Alias         | Inline comment                                        | Yes          | No         | No          |
| Directive Apply Account | Minimal                                               | Yes          | No         | No          |
| Directive Apply Account | Multi-segment account name                            | Yes          | No         | No          |
| Directive Apply Account | Inline comment                                        | Yes          | No         | No          |
| Directive Commodity     | Minimal                                               | Yes          | No         | No          |
| Directive Commodity     | Without symbol                                        | Yes          | No         | No          |
| Directive Commodity     | Without decimals                                      | Yes          | No         | No          |
| Directive Commodity     | With space                                            | Yes          | No         | No          |
| Directive Commodity     | Without format                                        | Yes          | No         | No          |
| Directive Commodity     | With format subdirective                              | Yes          | No         | No          |
| Directive Commodity     | Inline comment                                        | Yes          | No         | No          |
| Directive D             | Minimal                                               | Yes          | No         | No          |
| Directive D             | Inline comment                                        | Yes          | No         | No          |
| Directive Decimal Mark  | Dot                                                   | Yes          | No         | No          |
| Directive Decimal Mark  | Comma                                                 | Yes          | No         | No          |
| Directive Decimal Mark  | Inline comment                                        | Yes          | No         | No          |
| Directive Include       | With file path                                        | Yes          | No         | No          |
| Directive Include       | With file path including glob                         | Yes          | No         | No          |
| Directive Include       | With file path including whitespace                   | Yes          | No         | No          |
| Directive Include       | With file path including special characters           | Yes          | No         | No          |
| Directive Include       | With file path including file format prefix           | Yes          | No         | No          |
| Directive Include       | With multiple spaces before file path                 | Yes          | No         | No          |
| Directive Include       | Inline comment                                        | Yes          | No         | No          |
| Directive P             | Minimal                                               | Yes          | No         | No          |
| Directive P             | Inline Comment                                        | Yes          | No         | No          |
| Directive Payee         | Minimal                                               | Yes          | No         | No          |
| Directive Payee         | With empty name                                       | Yes          | No         | No          |
| Directive Payee         | With special characters                               | Yes          | No         | No          |
| Directive Payee         | Inline comment                                        | Yes          | No         | No          |
| Directive Tag           | Minimal                                               | Yes          | No         | No          |
| Directive Tag           | Inline comment                                        | Yes          | No         | No          |
| Directive Y             | Minimal                                               | Yes          | No         | No          |
| Directive Y             | Inline comment                                        | Yes          | No         | No          |
| Date                    | YYYY-MM-DD                                            | Yes          | No         | No          |
| Date                    | YYYY/MM/DD                                            | Yes          | No         | No          |
| Date                    | YYYY.MM.DD                                            | Yes          | No         | No          |
| Date                    | MM-DD                                                 | Yes          | No         | No          |
| Date                    | MM/DD                                                 | Yes          | No         | No          |
| Date                    | MM.DD                                                 | Yes          | No         | No          |
| Date                    | Secondary Date                                        | Yes          | No         | No          |
| Comment                 | Semicolon                                             | Yes          | Yes        | No          |
| Comment                 | Hash                                                  | Yes          | Yes        | No          |
| Comment                 | Asterisk                                              | Yes          | Yes        | No          |
| Comment                 | Block                                                 | Yes          | Yes        | No          |
