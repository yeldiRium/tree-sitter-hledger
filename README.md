# tree-sitter-hledger

Inspired by https://github.com/cbarrete/tree-sitter-ledger/, this is a from-scratch development of a tree-sitter grammar for [hledger](https://hledger.org/dev/hledger.html) files.

It is far from feature complete or even ready for use, which is why this readme is very empty for now.

## Completion Tracker

Pinned to hledger version 1.43.
Each test can be found under `test/corpus/<topic>.txt`.
Test names start with `<feature>` and have an optional suffix, if there are multiple test cases for a feature.

| Topic                   | Feature                                                | Has Testcase | Has Design | Implemented |
| :--                     | :--                                                    | --:          | --:        | --:         |
| Transaction             | Minimal                                                | No           | No         | No          |
| Transaction             | Payee                                                  | No           | No         | No          |
| Transaction             | Description                                            | No           | No         | No          |
| Transaction             | Inline comment                                         | No           | No         | No          |
| Transaction             | Inline comment with tags                               | No           | No         | No          |
| Transaction             | Following comment                                      | No           | No         | No          |
| Transaction             | Following comment with tags                            | No           | No         | No          |
| Transaction             | Minimal                                                | No           | No         | No          |
| Transaction             | Status                                                 | No           | No         | No          |
| Transaction             | Code                                                   | No           | No         | No          |
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
| Posting                 | Inline comment                                         | No           | No         | No          |
| Posting                 | Inline comment with tags                               | No           | No         | No          |
| Posting                 | Posting date                                           | No           | No         | No          |
| Posting                 | Following comment                                      | No           | No         | No          |
| Posting                 | Following comment with tags                            | No           | No         | No          |
| Periodic Transaction    | Minimal                                                | No           | No         | No          |
| Periodic Transaction    | Description                                            | No           | No         | No          |
| Auto Postings           | Minimal                                                | No           | No         | No          |
| Directive Account       | Minimal                                                | No           | No         | No          |
| Directive Account       | Multi-segment name                                     | No           | No         | No          |
| Directive Account       | Multi-segment name with whitespace                     | No           | No         | No          |
| Directive Account       | Name including UTF-8                                   | No           | No         | No          |
| Directive Account       | Name with numeric content                              | No           | No         | No          |
| Directive Account       | Name with symbols                                      | No           | No         | No          |
| Directive Account       | Name with semicolon                                    | No           | No         | No          |
| Directive Account       | Single letter name                                     | No           | No         | No          |
| Directive Account       | Multiple spaces before account name                    | No           | No         | No          |
| Directive Account       | Inline comment                                         | No           | No         | No          |
| Directive Account       | Inline comment with tag                                | No           | No         | No          |
| Directive Account       | Following comment with tag                             | No           | No         | No          |
| Directive Alias         | Minimal                                                | No           | No         | No          |
| Directive Alias         | Multi-segment name                                     | No           | No         | No          |
| Directive Alias         | Regex                                                  | No           | No         | No          |
| Directive Alias         | End alias                                              | No           | No         | No          |
| Directive Alias         | Inline comment                                         | No           | No         | No          |
| Directive Apply Account | Minimal                                                | No           | No         | No          |
| Directive Apply Account | Multi-segment account name                             | No           | No         | No          |
| Directive Apply Account | Inline comment                                         | No           | No         | No          |
| Directive Commodity     | Minimal                                                | No           | No         | No          |
| Directive Commodity     | Without symbol                                         | No           | No         | No          |
| Directive Commodity     | Without decimals                                       | No           | No         | No          |
| Directive Commodity     | With space                                             | No           | No         | No          |
| Directive Commodity     | Without format                                         | No           | No         | No          |
| Directive Commodity     | With format subdirective                               | No           | No         | No          |
| Directive Commodity     | Inline comment                                         | No           | No         | No          |
| Directive D             | Minimal                                                | No           | No         | No          |
| Directive D             | Inline Comment                                         | No           | No         | No          |
| Directive Decimal Mark  | Dot                                                    | No           | No         | No          |
| Directive Decimal Mark  | Comma                                                  | No           | No         | No          |
| Directive Decimal Mark  | Inline comment                                         | No           | No         | No          |
| Directive Include       | With file path                                         | No           | No         | No          |
| Directive Include       | With file path including glob                          | No           | No         | No          |
| Directive Include       | With file path including whitespace                    | No           | No         | No          |
| Directive Include       | With file path including special characters            | No           | No         | No          |
| Directive Include       | With file path including file format prefix            | No           | No         | No          |
| Directive Include       | With multiple spaces before file path                  | No           | No         | No          |
| Directive Include       | Inline comment                                         | No           | No         | No          |
| Directive P             | Minimal                                                | No           | No         | No          |
| Directive P             | Inline Comment                                         | No           | No         | No          |
| Directive Payee         | Minimal                                                | No           | No         | No          |
| Directive Payee         | With empty name                                        | No           | No         | No          |
| Directive Payee         | With special characters                                | No           | No         | No          |
| Directive Payee         | Inline comment                                         | No           | No         | No          |
| Directive Tag           | Minimal                                                | No           | No         | No          |
| Directive Tag           | Inline comment                                         | No           | No         | No          |
| Directive Y             | Minimal                                                | No           | No         | No          |
| Directive Y             | Inline comment                                         | No           | No         | No          |
| Date                    | YYYY-MM-DD                                             | No           | No         | No          |
| Date                    | YYYY/MM/DD                                             | No           | No         | No          |
| Date                    | YYYY.MM.DD                                             | No           | No         | No          |
| Date                    | MM-DD                                                  | No           | No         | No          |
| Date                    | MM/DD                                                  | No           | No         | No          |
| Date                    | MM.DD                                                  | No           | No         | No          |
| Date                    | Secondary Date                                         | No           | No         | No          |
| Comment                 | Semicolon                                              | No           | No         | No          |
| Comment                 | Hash                                                   | No           | No         | No          |
| Comment                 | Asterisk                                               | No           | No         | No          |
| Comment                 | Block                                                  | No           | No         | No          |
