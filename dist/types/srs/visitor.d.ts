import { IToken, IRecognitionException, CstVisitorConstructor, ICstVisitor, CstNode } from 'chevrotain';
import { ITokensMap } from '../helpers/types';
interface SparqlSrsVisitorItem {
    parseResult: {
        errors: IRecognitionException[];
        cst: any;
    };
    originalToken: IToken;
}
export interface ISparqlSrsVisitor extends ICstVisitor<any, any> {
    IfClause(ctx: ITokensMap, cstInputTokens: IToken[]): void;
    ThenClause(ctx: ITokensMap, cstInputTokens: IToken[]): void;
    $getGroupGraphPatterns(): SparqlSrsVisitorItem[];
    $getTriplesBlocks(): SparqlSrsVisitorItem[];
    $resetState(): void;
}
export declare const getSparqlSrsVisitor: (BaseVisitor: CstVisitorConstructor) => ISparqlSrsVisitor;
export declare function reduceVisitorItemErrors(acc: IRecognitionException[], item: SparqlSrsVisitorItem): IRecognitionException[];
export declare function findAndSwapPlaceholders(node: IToken, parentNode: CstNode, visitorItems: SparqlSrsVisitorItem[], key: string): SparqlSrsVisitorItem;
export {};
