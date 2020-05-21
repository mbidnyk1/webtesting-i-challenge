module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(typeof item === 'object' 
  && 'name' in item 
  && 'enhancement' in item 
  && 'durability' in item 
  && item.durability >= 0 
  && item.durability <=100 
  && item.enhancement >=0 
  && item.enhancement <= 20) {
    
    if(item.enhancement < 20){
      ++item.enhancement 
      return { ...item };
    }
    if(item.enhancement === 20){
      return {...item}
    }
  }
  return 'Not an item object.'
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability -= 5 
    return {...item}
  }
  if(item.enhancement >= 15){
    item.durability -= 10
    if(item.enhancement === 15 || item.enhancement === 16){
      return {...item}
    }
    if(item.enhancement > 16){
      --item.enhancement
      return {...item}
    }
  }
}

function repair(item) {
  if(typeof item === 'object' 
  && 'name' in item 
  && 'enhancement' in item 
  && 'durability' in item 
  && item.durability >= 0 
  && item.durability <=100 
  && item.enhancement >=0 
  && item.enhancement <= 20) {
  item.durability = 100;
  return { ...item};
  }
  return 'Not an item object.'
}

function get(item) {
  return { ...item };
}

