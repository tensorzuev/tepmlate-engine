let helper: Helper;
let localDeps:HashMap<()=>{}> = {};

//@ts-ignore
import buttons from 'Controls/buttons';

localDeps['Controls/buttons'] = buttons;


const __staticObject1 = {
   'class': 'my-class'
};

const __staticObject2 = {
   'class': 'my-class2'
};

function _private1(scope: Control, prevScope: HashMap<string>, attributes: Attribute, generator: Generator, defCollection: any):Promise<any> {
   //content field it's name of option
   let data = { content: scope };
   let logicParent = scope.isWasaby ?  scope : attributes.logicParent;
   let rootKey = attributes.key;


   const __options1 = generator.getMemoData(rootKey, (dep1, dep2) => {
      return helper.mergeOptions({
         caption: 'inner caption',
         color: 'red',
         value: dep1,
         second: dep2
      }, scope);
   }, [helper.getter(["myValue", "field"], data, prevScope),
      helper.getter(["content", "propFromBtn"], data, prevScope),
      scope]);

   const __attr1 = generator.getMemoData(rootKey, () => {
      return helper.mergeAttributes({
         key: '_0',
         attributes: __staticObject2,
         logicParent: logicParent
      }, attributes);
   }, [ attributes.attributes, attributes.key]);


   let out = generator.joinElements([
      generator.createControl('SomeModule/somelib:SomeControl',
         __options1,
         __attr1,
         localDeps,
         defCollection)
   ]);

   return out;
}

export function template(scope: Control, prevScope: HashMap<string>, attributes: Attribute, generator: Generator, defCollection: any):Promise<any> {

   let out;
   let data = scope;
   let logicParent = scope.isWasaby ?  scope : attributes.logicParent;
   let rootKey = attributes.key;


   const __attr1 = generator.getMemoData(rootKey, (dep1) => {
      return helper.mergeAttributes({
         key: '_0',
         attributes: {
            title: '' + dep1,
            class: "my-example"
         },
         logicParent: logicParent
      }, attributes);
   }, [helper.getter(["mytitle"], data, prevScope), attributes.attributes, attributes.key]);



   const __attr2 = generator.getMemoData(rootKey,() => {
      return {
         key: rootKey + '_0_0',
         logicParent: logicParent,
         attributes: __staticObject1
      };
   }, []);


   const __options1 = generator.getMemoData(rootKey, (dep1)=>{
      return {
         content: [
            {
               func: _private1,
               scope: data,
               prevScope: prevScope
            }
         ],
         caption: 'some string'
      };
   }, [helper.getter(["myValue", "field"], data, prevScope) ]);


   out = generator.joinElements([
      generator.createTag( 'div',
                  __attr1,
         [
                     generator.createControl('Controls/buttons:Button', __options1, __attr2, localDeps, defCollection)
                  ]
      )

   ]);

   return out;
}
