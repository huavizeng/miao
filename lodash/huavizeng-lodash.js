var huaxizeng = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ary.length; i++) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item!=false) {
        result.push(item)
      }
    }
    return result
  },
  comcat: function(ary,value){
    if (typeof(value)=='object') {
     for (var i = 0; i < value.length; i++) {
       ary.push(value[i])

     }
     return ary
    } else if (typeof(value)=='number') {
      return ary.push(value)
    }
  }
  reverse:function(array){
    var temp
    var len=array.length
    var mid=Math.floor(len/2)
    for (var i =len-1 ; i >mid; i--) {
      temp=array[len-i-1]
      array[len-i-1]=array[i]
      array[i]=temp
    }
    return array
  }abcdefabcdef
}
