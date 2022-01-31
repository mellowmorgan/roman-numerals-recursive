export default function romanNum(num, roman){
  if (!Number.isInteger(num)){
    return "Error: please enter an integer."
  }
  else if (num-1000>=0){
    return romanNum(num-1000, roman.concat('M'));
  }
  else if(num-900>=0){
    return romanNum(num-900, roman.concat('CM'));
   }
  else if (num-500>=0){
    return romanNum(num-500, roman.concat('D'));
  }
  else if (num-400>=0){
    return romanNum(num-400, roman.concat('CD'));
  }
  else if (num-100>=0){
    return romanNum(num-100, roman.concat('C'));
  }
  else if (num-90>=0){
    return romanNum(num-90, roman.concat('XC'));
  }
  else if (num-50>=0){
    return romanNum(num-50, roman.concat('L'));
  }
  else if (num-40>=0){
    return romanNum(num-40, roman.concat('XL'));
  }
  else if (num-10>=0){
    return romanNum(num-10, roman.concat('X'));
  }
  else if(num-9>=0){
    return romanNum(num-9, roman.concat('IX'));
  }
  else if (num-5>=0){
    return romanNum(num-5, roman.concat('V'));
  }
  else if (num-4>=0){
    return romanNum(num-4, roman.concat('IV'));
  }
  else if (num-1>=0){
    return romanNum(num-1, roman.concat('I'));
  }
  else{
    if (roman==""){
      return "Error: Please enter an integer greater than 0."
    }
    return roman;
  }
}