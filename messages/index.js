// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

module.exports = async function (context, req) {
  console.log("incoming ", req.body.channel, req.body);
  return {
    target: req.body.channel,
    arguments: [req.body],
  };
};
