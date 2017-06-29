Page({
    onTap:function(){
        wx.redirectTo({
          url: '../posts/post',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})