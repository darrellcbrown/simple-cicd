import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyWebService } from './my-web-service';

export class MyWebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new MyWebService(this, 'Widgets');
    
  }
}