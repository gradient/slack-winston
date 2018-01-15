import * as winston from 'winston';

export interface SlackTransportOptions extends winston.WinstonModuleTransportOptions {
  domain: string;
  webhook_url: string;
  channel: string;

  username?: string;
  icon_emoji?: string;
  message?: string;
  queueDelay?: number;
}

export class Slack extends winston.Transport implements winston.TransportInstance {
  constructor(options?: SlackTransportOptions);
}
