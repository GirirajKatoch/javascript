range = function(n) {
  results = [];
  for(i=0;i<=n;i++) {
      results.push(i);
  }
  return results;
};
console.log(range(999).filter(function(n){return (n%3===0 || n%5===0)}).reduce(function(a,b){return a+b}));
