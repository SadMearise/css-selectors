import { LevelsContent } from '../types';

const levelsContent: LevelsContent = {
  1: {
    order: 'Select the apples',
    title: 'Type selector',
    subtitle: 'Select element by their type',
    levelName: 'type',
    description: 'Selects all elements with a specific type <strong class="info-text__strong">type</strong>. Type refers to the type of tag. For example: <strong class="info-text__strong">&lt;div&gt;</strong>, <strong class="info-text__strong">&lt;section&gt;</strong>, <strong class="info-text__strong">&lt;header&gt;</strong>, <strong class="info-text__strong">&lt;h1&gt;</strong> etc.',
    examples: [
      '<strong class="info-text__strong">div</strong> selects all <strong class="info-text__strong">&lt;div&gt;</strong> elements.',
      '<strong class="info-text__strong">&lt;h2&gt;</strong> selects all <strong class="info-text__strong">h2</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'apple',
            attributes: {
              'data-hl': 'b1',
            },
          },
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b2',
            },
            child: [
              {
                selector: 'apple',
                attributes: {
                  'data-hl': 'b3',
                },
              },
            ],
          },
          {
            selector: 'pickle',
            attributes: {
              'data-hl': 'b4',
            },
          },
          {
            selector: 'orange',
            attributes: {
              'data-hl': 'b5',
            },
          },
          {
            selector: 'orange',
            class: 'small',
            attributes: {
              'data-hl': 'b6',
            },
          },
        ],
      },
    ],
    board: [
      {
        selector: 'apple',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'strobe'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<apple></apple>',
        },
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b2',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'item__fruit_apple', 'strobe'],
            attributes: {
              'data-hl': 'b3',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
      {
        selector: 'pickle',
        classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle'],
        attributes: {
          'data-hl': 'b4',
          'data-html': '<pickle></pickle>',
        },
      },
      {
        selector: 'orange',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<orange></orange>',
        },
      },
      {
        selector: 'orange',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'item__fruit_orange_small', 'small'],
        attributes: {
          'data-hl': 'b6',
          'data-html': '<orange class="small"></orange>',
        },
      },
    ],
    result: 'apple',
    strobeElements: 2,
  },
  2: {
    order: 'Select the target apple',
    title: 'ID selector',
    subtitle: 'Select element by their ID',
    levelName: '#id',
    description: 'Select element with a specific <strong class="info-text__strong">id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong class="info-text__strong">#test</strong> select <strong class="info-text__strong">id="test"</strong> elements.',
      '<strong class="info-text__strong">div#test</strong> select <strong class="info-text__strong">&lt;div id="test"&gt;</strong> element.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'apple',
            attributes: {
              'data-hl': 'b1',
            },
          },
          {
            selector: 'bento',
            attributes: {
              'data-hl': 'b2',
            },
            child: [
              {
                selector: 'apple',
                attributes: {
                  'data-hl': 'b3',
                },
              },
            ],
          },
          {
            selector: 'bento',
            attributes: {
              'data-hl': 'b4',
            },
            child: [
              {
                selector: 'apple',
                attributes: {
                  id: 'target',
                  'data-hl': 'b5',
                },
              },
            ],
          },
        ],
      },
    ],
    board: [
      {
        selector: 'apple',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<apple></apple>',
        },
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b2',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b3',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b4',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'strobe'],
            attributes: {
              id: 'target',
              'data-hl': 'b5',
              'data-html': '<apple id="target"></apple>',
            },
          },
        ],
      },
    ],
    result: '#target',
    strobeElements: 1,
  },
  3: {
    order: 'Select the apples',
    title: 'Class selector',
    subtitle: 'Select elements by their class',
    levelName: '.classname',
    description: 'The <strong class="info-text__strong">.class</strong> selector selects elements with a specific class attribute. <br><br>To select elements with a specific class, write a period (.) character, followed by the name of the class.',
    examples: [
      '<strong class="info-text__strong">.someclass</strong> selects all elements with <strong class="info-text__strong">class="someclass"</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'orange',
            class: 'orange',
            attributes: {
              'data-hl': 'b1',
            },
          },
          {
            selector: 'bento',
            attributes: {
              'data-hl': 'b2',
            },
            child: [
              {
                selector: 'orange',
                class: 'orange',
                attributes: {
                  'data-hl': 'b3',
                },
              },
            ],
          },
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b4',
            },
            child: [
              {
                selector: 'orange',
                class: 'orange',
                attributes: {
                  'data-hl': 'b5',
                },
              },
            ],
          },
          {
            selector: 'orange',
            class: 'orange',
            attributes: {
              'data-hl': 'b6',
            },
          },
        ],
      },
    ],
    board: [
      {
        selector: 'orange',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'orange', 'strobe'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<orange class="orange"></orange>',
        },
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b2',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'orange', 'strobe'],
            attributes: {
              'data-hl': 'b3',
              'data-html': '<orange class="orange"></orange>',
            },
          },
        ],
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b4',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'orange', 'strobe'],
            attributes: {
              'data-hl': 'b5',
              'data-html': '<orange class="orange"></orange>',
            },
          },
        ],
      },
      {
        selector: 'orange',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'orange', 'strobe'],
        attributes: {
          'data-hl': 'b6',
          'data-html': '<orange class="orange"></orange>',
        },
      },
    ],
    result: '.orange',
    strobeElements: 4,
  },
  4: {
    order: 'Select the bottom apple',
    title: ':first-child Selector',
    subtitle: 'Select a first child element inside another element',
    levelName: ':first-child',
    description: 'The <strong class="info-text__strong">:first-child</strong> selector is used to select the specified selector, only if it is the first child of its parent. You can combine this pseudo-selector with other selectors.',
    examples: [
      '<strong class="info-text__strong">:first-child</strong> selects all first child elements.',
      '<strong class="info-text__strong">div:first-child</strong> selects all first child <strong class="info-text__strong">&lt;div&gt;</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'apple',
                attributes: {
                  'data-hl': 'b2',
                },
              },
              {
                selector: 'apple',
                attributes: {
                  'data-hl': 'b3',
                },
              },
              {
                selector: 'apple',
                attributes: {
                  'data-hl': 'b4',
                },
              },
            ],
          },
          {
            selector: 'apple',
            class: 'small',
            attributes: {
              'data-hl': 'b5',
            },
          },
        ],
      },
    ],
    board: [
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'strobe'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<apple></apple>',
            },
          },
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b3',
              'data-html': '<apple></apple>',
            },
          },
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
      {
        selector: 'apple',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'item__fruit_apple_small', 'small'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<apple class="small"></apple>',
        },
      },
    ],
    result: 'apple:first-child',
    strobeElements: 1,
  },
  5: {
    order: 'Select the top orange',
    title: ':last-child Selector',
    subtitle: 'Select a last child element inside another element',
    levelName: ':last-child',
    description: 'The <strong class="info-text__strong">:last-child</strong> selector matches every element that is the last child of its parent. You can combine this pseudo-selector with other selectors.',
    examples: [
      '<strong class="info-text__strong">:last-child</strong> selects all last child elements.',
      '<strong class="info-text__strong">div:last-child</strong> selects all last child <strong class="info-text__strong">&lt;div&gt;</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b2',
                },
              },
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b3',
                },
              },
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b4',
                },
              },
            ],
          },
          {
            selector: 'apple',
            class: 'small',
            attributes: {
              'data-hl': 'b5',
            },
          },
        ],
      },
    ],
    board: [
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<orange></orange>',
            },
          },
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange'],
            attributes: {
              'data-hl': 'b3',
              'data-html': '<orange></orange>',
            },
          },
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'strobe'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<orange></orange>',
            },
          },
        ],
      },
      {
        selector: 'apple',
        classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'item__fruit_apple_small', 'small'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<apple class="small"></apple>',
        },
      },
    ],
    result: 'orange:last-child',
    strobeElements: 1,
  },
  6: {
    order: 'Select all elements',
    title: '* Selector',
    subtitle: 'Select all elements',
    levelName: '*',
    description: 'The <strong class="info-text__strong">*</strong> selector selects all elements. <br/><br/>The <strong class="info-text__strong">*</strong> selector can also select all elements inside another element',
    examples: [
      '<strong class="info-text__strong">*</strong> select all elements.',
      '<strong class="info-text__strong">div *</strong> select all elements inside <strong class="info-text__strong">&lt;div&gt;</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'bento',
            attributes: {
              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'pickle',
                class: 'small',
                attributes: {
                  'data-hl': 'b2',
                },
              },
            ],
          },
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b3',
            },
            child: [
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b4',
                },
              },
              {
                selector: 'orange',
                class: 'small',
                attributes: {
                  'data-hl': 'b5',
                },
              },
            ],
          },
          {
            selector: 'pickle',
            attributes: {
              'data-hl': 'b6',
            },
          },
        ],
      },
    ],
    board: [
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento', 'strobe'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'pickle',
            classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle', 'item__vegetable_pickle_small', 'strobe', 'small'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<pickle class="small"></pickle>',
            },
          },
        ],
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate', 'strobe'],
        attributes: {
          'data-hl': 'b3',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'strobe'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<orange></orange>',
            },
          },
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'item__fruit_orange_small', 'strobe', 'small'],
            attributes: {
              'data-hl': 'b5',
              'data-html': '<orange class="small"></orange>',
            },
          },
        ],
      },
      {
        selector: 'pickle',
        classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle', 'strobe'],
        attributes: {
          'data-hl': 'b6',
          'data-html': '<pickle></pickle>',
        },
      },
    ],
    result: '*',
    strobeElements: 6,
  },
  7: {
    order: 'Select everything on a bento',
    title: '* Selector #2',
    subtitle: 'Combine the Universal Selector and select everything and a bento',
    levelName: 'type *',
    description: 'The <strong class="info-text__strong">*</strong> selector selects all elements. <br/><br/>The <strong class="info-text__strong">*</strong> selector can also select all elements inside another element',
    examples: [
      '<strong class="info-text__strong">*</strong> select all elements.',
      '<strong class="info-text__strong">div *</strong> select all elements inside <strong class="info-text__strong">&lt;div&gt;</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'orange',
                attributes: {

                  'data-hl': 'b2',
                },
              },
            ],
          },
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b3',
            },
            child: [
              {
                selector: 'apple',
                attributes: {

                  'data-hl': 'b4',
                },
              },
            ],
          },
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b5',
            },
            child: [
              {
                selector: 'pickle',
                attributes: {

                  'data-hl': 'b6',
                },
              },
            ],
          },
        ],
      },
    ],
    board: [
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'strobe'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<orange></orange>',
            },
          },
        ],
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b3',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple', 'strobe'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'pickle',
            classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle', 'strobe'],
            attributes: {
              'data-hl': 'b6',
              'data-html': '<pickle></pickle>',
            },
          },
        ],
      },
    ],
    result: 'bento *',
    strobeElements: 3,
  },
  8: {
    order: 'Select the orange on the bento',
    title: 'Descendant Selector',
    subtitle: 'Select an element inside another element',
    levelName: 'typeA typeB',
    description: 'Typically represented by a single space (" ") character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor element matching the first selector.',
    examples: [
      '<strong class="info-text__strong">div p</strong> select all <strong class="info-text__strong">p</strong> elements that are inside of any <strong class="info-text__strong">div</strong> element.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'orange',
                attributes: {

                  'data-hl': 'b2',
                },
              },
            ],
          },
          {
            selector: 'plate',
            attributes: {

              'data-hl': 'b3',
            },
            child: [
              {
                selector: 'apple',
                attributes: {

                  'data-hl': 'b4',
                },
              },
            ],
          },
          {
            selector: 'plate',
            attributes: {

              'data-hl': 'b5',
            },
            child: [
              {
                selector: 'pickle',
                attributes: {

                  'data-hl': 'b6',
                },
              },
            ],
          },
        ],
      },
    ],
    board: [
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'strobe'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<orange></orange>',
            },
          },
        ],
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b3',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'pickle',
            classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle'],
            attributes: {
              'data-hl': 'b6',
              'data-html': '<pickle></pickle>',
            },
          },
        ],
      },
    ],
    result: 'bento orange',
    strobeElements: 1,
  },
  9: {
    order: 'Select the orange and the pickle on the bentos',
    title: ':only-child Selector',
    subtitle: 'Select an element that are the only element inside of another one.',
    levelName: ':only-child',
    description: 'The <strong class="info-text__strong">:only-child</strong> selector matches every element that is the only child of its parent.',
    examples: [
      '<strong class="info-text__strong">div:only-child</strong> selects the <strong class="info-text__strong">div</strong> elements that are the only child of some other element.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b1',
            },
            child: [
              {
                selector: 'orange',
                attributes: {

                  'data-hl': 'b2',
                },
              },
            ],
          },
          {
            selector: 'bento',
            attributes: {

              'data-hl': 'b3',
            },
            child: [
              {
                selector: 'pickle',
                attributes: {

                  'data-hl': 'b4',
                },
              },
            ],
          },
          {
            selector: 'plate',
            attributes: {

              'data-hl': 'b5',
            },
            child: [
              {
                selector: 'apple',
                attributes: {

                  'data-hl': 'b6',
                },
              },
              {
                selector: 'apple',
                attributes: {

                  'data-hl': 'b7',
                },
              },
            ],
          },
        ],
      },
    ],
    board: [
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange', 'strobe'],
            attributes: {
              'data-hl': 'b2',
              'data-html': '<orange></orange>',
            },
          },
        ],
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b3',
          'data-html': '<bento></bento>',
        },
        child: [
          {
            selector: 'pickle',
            classes: ['game__table-item', 'item', 'item__vegetable', 'item__vegetable_pickle', 'strobe'],
            attributes: {
              'data-hl': 'b4',
              'data-html': '<pickle></pickle>',
            },
          },
        ],
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b5',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b6',
              'data-html': '<apple></apple>',
            },
          },
          {
            selector: 'apple',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_apple'],
            attributes: {
              'data-hl': 'b7',
              'data-html': '<apple></apple>',
            },
          },
        ],
      },
    ],
    result: ':only-child',
    strobeElements: 2,
  },
  10: {
    order: 'Select the empty plates',
    title: ':empty Selector',
    subtitle: 'Select elements that don\'t have children.',
    levelName: ':empty',
    description: 'The <strong class="info-text__strong">:empty</strong> selector matches every element that has no children (including text nodes).',
    examples: [
      '<strong class="info-text__strong">section:empty</strong> selects all empty <strong class="info-text__strong">&lt;section&gt;</strong> elements.',
    ],
    markup: [
      {
        selector: 'div',
        class: 'table',
        child: [
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b1',
            },
          },
          {
            selector: 'bento',
            attributes: {
              'data-hl': 'b2',
            },
          },
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b3',
            },
          },
          {
            selector: 'plate',
            attributes: {
              'data-hl': 'b4',
            },
            child: [
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b5',
                },
              },
              {
                selector: 'orange',
                attributes: {
                  'data-hl': 'b6',
                },
              },
            ],
          },
        ],
      },
    ],
    board: [
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate', 'strobe'],
        attributes: {
          'data-hl': 'b1',
          'data-html': '<plate></plate>',
        },
      },
      {
        selector: 'bento',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_bento'],
        attributes: {
          'data-hl': 'b2',
          'data-html': '<bento></bento>',
        },
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate', 'strobe'],
        attributes: {
          'data-hl': 'b3',
          'data-html': '<plate></plate>',
        },
      },
      {
        selector: 'plate',
        classes: ['game__table-item', 'item', 'item__base', 'item__base_plate'],
        attributes: {
          'data-hl': 'b4',
          'data-html': '<plate></plate>',
        },
        child: [
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange'],
            attributes: {
              'data-hl': 'b5',
              'data-html': '<orange></orange>',
            },
          },
          {
            selector: 'orange',
            classes: ['game__table-item', 'item', 'item__fruit', 'item__fruit_orange'],
            attributes: {
              'data-hl': 'b6',
              'data-html': '<orange></orange>',
            },
          },
        ],
      },
    ],
    result: 'plate:empty',
    strobeElements: 2,
  },
};

export default levelsContent;
