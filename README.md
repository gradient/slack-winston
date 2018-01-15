# slack-winston-transport

[![MIT License](http://img.shields.io/npm/v/slack-winston.svg?style=flat)](./LICENSE)

## Index

* [Install](#install)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Install

```bash
npm install -S winston slack-winston-transport
```


## Usage

```js
var winston = require('winston')
var slackWinston = require('slack-winston').Slack

var options = {
  domain: 'my-domain',
  webhook_url: 'my-slack-incoming-webhook-url',
  channel: 'general',
  level: 'warn'
}

winston.add(slackWinston, options)
```

Many options can be seen in the [Slack API docs](https://api.slack.com/methods/chat.postMessage).

* __level:__ Level of messages that this transport should log
* __silent:__ If true, will not log messages
* __webhook_url:__ Required. Slack incoming webhook url.
* __channel:__ Required. Channel of chat (e.g. "#foo" or "@foo")
* __domain:__ Required. Domain of Slack (e.g. "foo" if "foo.slack.com")
* __username:__ Username of the incoming webhook Slack bot
* __icon_emoji:__ Icon of bot
* __message:__ [lodash templates](http://lodash.com/docs#template). Gets passed the `{{message}}`, `{{level}}`, and `{{meta}}` as a JSON string. If not specified, it will print a default of `{{message}}\n\n{{meta}}`.  **Note that this gets sent as the `text` field in the payload per Slack requirements.**
* __queueDelay:__ Delay time (ms) between messages in queue (defaults to 500)

## Credits

This module is a fork of [`slack-winston` by Nick Baugh](https://github.com/niftylettuce/slack-winston) with some updates.

## License

[MIT](./LICENSE)
