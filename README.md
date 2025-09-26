# tree-sitter-hledger

Inspired by https://github.com/cbarrete/tree-sitter-ledger/, this is a from-scratch development of a tree-sitter grammar for [hledger](https://hledger.org/dev/hledger.html) files.

## Performance

Some features are not present in the AST for performance reasons.
Notably:
- tags in comments need to be parsed out of comments
- virtual accounts need to be differentiated by looking at their first character


## Completion Tracker

Pinned to hledger version 1.43.
Each test can be found under `test/corpus/<topic>.txt`.
Test names start with `<feature>` and have an optional suffix, if there are multiple test cases for a feature.

| Topic                   | Feature                                               | Has Testcase | Has Design | Implemented |
| :--                     | :--                                                   | --:          | --:        | --:         |
| Transaction             | Complete                                              | Yes          | Yes        | Yes         |
| Transaction             | Minimal                                               | Yes          | Yes        | Yes         |
| Transaction             | Common example                                        | Yes          | Yes        | Yes         |
| Transaction             | Description                                           | Yes          | Yes        | Yes         |
| Transaction             | Payee and note                                        | Yes          | Yes        | Yes         |
| Transaction             | Status                                                | Yes          | Yes        | Yes         |
| Transaction             | Code                                                  | Yes          | Yes        | Yes         |
| Transaction             | Inline comment                                        | Yes          | Yes        | Yes         |
| Transaction             | Inline comment with tags                              | No           | No         | No          |
| Transaction             | Following comment                                     | Yes          | Yes        | Yes         |
| Transaction             | Following comment with tags                           | No           | No         | No          |
| Posting                 | Minimal                                               | Yes          | Yes        | Yes         |
| Posting                 | Multi-segment account name                            | Yes          | Yes        | Yes         |
| Posting                 | Amount                                                | Yes          | Yes        | Yes         |
| Posting                 | Negative amount                                       | Yes          | Yes        | Yes         |
| Posting                 | Commodity                                             | Yes          | Yes        | Yes         |
| Posting                 | Complex commodity                                     | Yes          | Yes        | Yes         |
| Posting                 | Flipped commodity                                     | Yes          | Yes        | Yes         |
| Posting                 | Balance assignment                                    | Yes          | Yes        | Yes         |
| Posting                 | Balance assertion                                     | Yes          | Yes        | Yes         |
| Posting                 | Subaccount-inclusive balance assertion                | Yes          | Yes        | Yes         |
| Posting                 | Sole commodity balance assertion                      | Yes          | Yes        | Yes         |
| Posting                 | Subaccount-inclusive sole commodity balance assertion | Yes          | Yes        | Yes         |
| Posting                 | Cost with price per unit                              | Yes          | Yes        | Yes         |
| Posting                 | Cost with total cost                                  | Yes          | Yes        | Yes         |
| Posting                 | Status                                                | Yes          | Yes        | Yes         |
| Posting                 | Unbalanced virtual posting                            | No           | No         | No          |
| Posting                 | Balanced virtual posting                              | No           | No         | No          |
| Posting                 | Inline comment                                        | Yes          | Yes        | Yes         |
| Posting                 | Inline comment with tags                              | No           | No         | No          |
| Posting                 | Posting date                                          | No           | No         | No          |
| Periodic Transaction    | Minimal                                               | Yes          | No         | No          |
| Periodic Transaction    | Description                                           | Yes          | No         | No          |
| Periodic Transaction    | Period                                                | No           | No         | No          |
| Auto Posting            | Minimal                                               | Yes          | No         | No          |
| Directive Account       | Minimal                                               | Yes          | Yes        | Yes         |
| Directive Account       | Multi-segment name                                    | Yes          | Yes        | Yes         |
| Directive Account       | Multi-segment name with whitespace                    | Yes          | Yes        | Yes         |
| Directive Account       | Name including UTF-8                                  | Yes          | Yes        | Yes         |
| Directive Account       | Name with numeric content                             | Yes          | Yes        | Yes         |
| Directive Account       | Name with symbols                                     | Yes          | Yes        | Yes         |
| Directive Account       | Name with semicolon                                   | Yes          | Yes        | Yes         |
| Directive Account       | Single letter name                                    | Yes          | Yes        | Yes         |
| Directive Account       | Multiple spaces before account name                   | Yes          | Yes        | Yes         |
| Directive Account       | Inline comment                                        | Yes          | Yes        | Yes         |
| Directive Account       | Inline comment with tags                              | No           | No         | No          |
| Directive Account       | Following comment                                     | Yes          | Yes        | Yes         |
| Directive Account       | Following comment with tags                           | No           | No         | No          |
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
| Date                    | YYYY-MM-DD                                            | Yes          | Yes        | Yes         |
| Date                    | YYYY/MM/DD                                            | Yes          | Yes        | Yes         |
| Date                    | YYYY.MM.DD                                            | Yes          | Yes        | Yes         |
| Date                    | MM-DD                                                 | Yes          | Yes        | Yes         |
| Date                    | MM/DD                                                 | Yes          | Yes        | Yes         |
| Date                    | MM.DD                                                 | Yes          | Yes        | Yes         |
| Date                    | Secondary Date                                        | Yes          | Yes        | Yes         |
| Comment                 | Semicolon                                             | Yes          | Yes        | Yes         |
| Comment                 | Hash                                                  | Yes          | Yes        | Yes         |
| Comment                 | Asterisk                                              | Yes          | Yes        | Yes         |
| Comment                 | Block                                                 | Yes          | Yes        | No          |
