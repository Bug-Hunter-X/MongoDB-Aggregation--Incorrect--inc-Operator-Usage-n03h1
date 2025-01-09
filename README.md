# MongoDB Aggregation Pipeline Bug: Incorrect $inc Operator Usage

This repository demonstrates a common error when using the `$inc` operator within a MongoDB aggregation pipeline. The `$inc` operator is intended to increment a field's value, but it's often misused outside of the appropriate context, leading to unexpected results.

## The Bug

The `bug.js` file contains code that attempts to increment the `total` field by 100 after the `$group` stage. This is incorrect. The `$inc` operator should be used within the `$group` stage to increment the field during the grouping process.

## The Solution

The `bugSolution.js` file provides the corrected code.  The `$inc` operation is moved inside the `$group` stage, ensuring the proper incrementation of the total during the aggregation process.  This corrects the logic and provides the expected results.