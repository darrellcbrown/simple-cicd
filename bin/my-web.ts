#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyWebStack } from '../lib/my-web-stack';

const app = new cdk.App();

new MyWebStack(app, 'MyWebStack', {
  env: {
    account: '307158967668',
    region: 'us-west-2',
  }
});

app.synth();