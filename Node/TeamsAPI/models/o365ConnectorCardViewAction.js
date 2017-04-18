/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the O365ConnectorCardViewAction class.
 * @constructor
 * @member {string} [name] Name of the action
 *
 * @member {array} [target] Target urls
 *
 */
class O365ConnectorCardViewAction extends models['O365ConnectorCardActionBase'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of O365ConnectorCardViewAction
   *
   * @returns {object} metadata of O365ConnectorCardViewAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'O365ConnectorCardViewAction',
      type: {
        name: 'Composite',
        className: 'O365ConnectorCardViewAction',
        modelProperties: {
          type: {
            required: false,
            serializedName: '@type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = O365ConnectorCardViewAction;
