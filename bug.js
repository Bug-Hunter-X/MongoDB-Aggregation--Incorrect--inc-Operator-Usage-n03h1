```javascript
//Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection('myCollection').aggregate([
  { $match: { name: 'John' } },
  { $group: { _id: '$name', total: { $sum: '$amount' } } },
  { $inc: { total: 100 } } // Incorrect usage of $inc outside of $group
]);
```