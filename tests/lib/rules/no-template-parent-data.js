/**
 * @fileoverview Avoid accessing template parent data
 * @author Dominik Ferber
 * @copyright 2016 Dominik Ferber. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

import { RuleTester } from 'eslint';
import rule from '../../../lib/rules/no-template-parent-data';

const ruleTester = new RuleTester();

ruleTester.run('no-template-parent-data', rule, {
  valid: ['Template.currentData()', 'Template.instance()', 'foo'],

  invalid: [
    {
      code: 'Template.parentData()',
      errors: [
        {
          message: 'Forbidden. Pass data explicitly instead',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'Template.parentData(0)',
      errors: [
        {
          message: 'Forbidden. Pass data explicitly instead',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'Template.parentData(1)',
      errors: [
        {
          message: 'Forbidden. Pass data explicitly instead',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'Template.parentData(foo)',
      errors: [
        {
          message: 'Forbidden. Pass data explicitly instead',
          type: 'CallExpression',
        },
      ],
    },
  ],
});
