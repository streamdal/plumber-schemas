import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    CreateDataQualityRuleRequest: MessageTypeDefinition
    CreateDataQualityRuleResponse: MessageTypeDefinition
    CreateDataQualityRuleSetRequest: MessageTypeDefinition
    CreateDataQualityRuleSetResponse: MessageTypeDefinition
    DeleteDataQualityRuleRequest: MessageTypeDefinition
    DeleteDataQualityRuleResponse: MessageTypeDefinition
    DeleteDataQualityRuleSetRequest: MessageTypeDefinition
    DeleteDataQualityRuleSetResponse: MessageTypeDefinition
    GetDataQualityRuleRequest: MessageTypeDefinition
    GetDataQualityRuleResponse: MessageTypeDefinition
    GetDataQualityRuleSetRequest: MessageTypeDefinition
    GetDataQualityRuleSetResponse: MessageTypeDefinition
    GetDataQualityRuleSetsRequest: MessageTypeDefinition
    GetDataQualityRuleSetsResponse: MessageTypeDefinition
    PublishMetricsRequest: MessageTypeDefinition
    PublishMetricsResponse: MessageTypeDefinition
    SendRuleNotificationRequest: MessageTypeDefinition
    SendRuleNotificationResponse: MessageTypeDefinition
    UpdateDataQualityRuleRequest: MessageTypeDefinition
    UpdateDataQualityRuleResponse: MessageTypeDefinition
    UpdateDataQualityRuleSetRequest: MessageTypeDefinition
    UpdateDataQualityRuleSetResponse: MessageTypeDefinition
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      FailureMode: MessageTypeDefinition
      FailureModeAlertSlack: MessageTypeDefinition
      FailureModeDLQ: MessageTypeDefinition
      FailureModeReject: MessageTypeDefinition
      FailureModeTransform: MessageTypeDefinition
      Foreman: MessageTypeDefinition
      MatchOperator: EnumTypeDefinition
      Rule: MessageTypeDefinition
      RuleConfigCustom: MessageTypeDefinition
      RuleConfigMatch: MessageTypeDefinition
      RuleFailureMode: EnumTypeDefinition
      RuleMode: EnumTypeDefinition
      RuleSet: MessageTypeDefinition
      RuleType: EnumTypeDefinition
      SourceManager: MessageTypeDefinition
      Status: MessageTypeDefinition
    }
  }
}

