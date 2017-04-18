/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the TeamsChannelData class.
 * @constructor
 * List of channels under a team
 *
 * @member {object} [channel]
 *
 * @member {string} [channel.id] Unique identifier representing a channel
 *
 * @member {string} [channel.name] Name of the channel
 *
 * @member {string} [eventType] Type of event.
 *
 * @member {object} [team]
 *
 * @member {string} [team.id] Unique identifier representing a team
 *
 * @member {string} [team.name] Name of team.
 *
 * @member {object} [tenant]
 *
 * @member {string} [tenant.id] Unique identifier representing a tenant
 *
 */
class TeamsChannelData {
  constructor() {
  }

  /**
   * Defines the metadata of TeamsChannelData
   *
   * @returns {object} metadata of TeamsChannelData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TeamsChannelData',
      type: {
        name: 'Composite',
        className: 'TeamsChannelData',
        modelProperties: {
          channel: {
            required: false,
            serializedName: 'channel',
            type: {
              name: 'Composite',
              className: 'ChannelInfo'
            }
          },
          eventType: {
            required: false,
            serializedName: 'eventType',
            type: {
              name: 'String'
            }
          },
          team: {
            required: false,
            serializedName: 'team',
            type: {
              name: 'Composite',
              className: 'TeamInfo'
            }
          },
          tenant: {
            required: false,
            serializedName: 'tenant',
            type: {
              name: 'Composite',
              className: 'TenantInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = TeamsChannelData;
