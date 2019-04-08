var huavizeng = {
  //数组
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ary.length; i+=size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
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
  },
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
  },
  
  flatten:function flatten(array){
    var result=[]
    array.forEach(val=>{
      if(Array.isArray(val)){
        val.forEach(item=>{
          result.push(item)
        })
      }else {
        result.push(val)
      }
    })
    return result
  },

  head:function head(array){
    return array==[]?undefined:array[0]
  },
  indexof:function indexof(array,value,fromIndex=0){
    if (fromIndex<0) {
      fromIndex+=array.length
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i]==value) {
        return i
      }
    }
    return -1
  },
  initial:function initial(array){
    var len=array.length-1
    return array.splice(len,1)
  },
  last:function last(array){
    return array[array.length-1]
  },

  fill:function fill(array,value,start=0,end=array.length){
    for (var i = start; i < end; i++) {
      array[i]=value
    }
    return array
  },
  pull:function pull(array,...value){
    for (var i = 0; i < array.length; i++) {
      if (value.indexOf(array[i])!==-1) {
        array.splice(i,1)
        i--
      }
    }
    return array
  }
}
