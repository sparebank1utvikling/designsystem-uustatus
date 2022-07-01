// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// imports of our schemas
import ffe_component from './ffe_component'
import npm_package from './npm_package'
import wcag_rule from './wcag_rule'
import testcase from './testcase'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testcase,
    ffe_component,
    npm_package,
    wcag_rule,
  ]),
})
