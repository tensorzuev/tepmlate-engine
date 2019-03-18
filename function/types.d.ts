declare type Control ={
   isWasaby: boolean;
}

declare type HashMap<T> = {
   [propname: string]: T;
}

declare type Attribute ={
   key: string;
   attributes: HashMap<string>;
   logicParent: Control
}

declare type TemplateObject  = {

}

declare type Generator  = {
   joinElements:  (arr: Array<Promise<TemplateObject>>) => Promise<TemplateObject>;
   createTag: (type: string,
               options: { content: Promise<TemplateObject> },
               attributes: Attribute) => Promise<TemplateObject>;

   createControl: (typeControl: string,
                   options: HashMap<any>,
                   attributes: Attribute,
                   localDeps: HashMap<() => {}>,
                   defCollection: unknown) => Promise<TemplateObject>;
   createText: () => Promise<TemplateObject>;

   getMemoData: (rootKey: string,
                 fn: (dep1?: any, dep2?: any) => HashMap<unknown>,
                 deps: Array<unknown>
   ) => any;
   hasSyncPhase: () => boolean;
}

declare type Helper = {
   mergeAttributes: (myAttributes:Attribute, topAttributes:Attribute) => Attribute;
   mergeOptions: (localOptions:HashMap<unknown>, partialOptions:HashMap<unknown>) => HashMap<unknown>;
   getter: (path:Array<string>, scope: any, prevScope: any) => unknown;
}


