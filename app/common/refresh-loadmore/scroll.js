function Scroll(dom, options) {
  options = options || {};
  
  this.setRefeshData = function(bool){
    options.refeshDataFlag = bool;
  }

  this.appendData = function(bool){
    options.appendDataFlag = bool;
  }
  var myScroll = new IScroll(dom, Object.assign(
    options, {
      probeType: 3,
      refeshDataFlag:true,
      appendDataFlag:true
    }
  ));

  myScroll.scrollTo(0, -50 * window.devicePixelRatio, 0);



  var refreshImg = document.querySelector('.refresh img');
  var refreshText = document.querySelector('.refresh span');
  var loadmoreImg = document.querySelector('.loadmore img');
  var loadmoreText = document.querySelector('.loadmore span');


  // 提供刷新dom的方法
  myScroll.on('beforeScrollStart', function () {
    // console.log('boforeScrollStart');
    myScroll.refresh();
  })


  // 监听正在滚动，处理下拉刷新
  myScroll.on('scroll', function () {
    if (myScroll.y >= 0) {
      //达到了可以下拉刷新的条件
      refreshImg.className = 'active';
      refreshText.innerText = '释放立即刷新...';
    } else {
      //没有达到条件
      refreshImg.className = '';
      refreshText.innerText = '下拉可以刷新...';
    }
  })

  // 监听滚动停止的事件，处理下拉刷新
  myScroll.on('scrollEnd', function () {
    if (myScroll.y >= 0) {

      //达到了可以下拉刷新的条件，触发下拉刷新
      refreshImg.src = '/public/assets/loading.gif';
      refreshText.innerText = '正在刷新...';
      //告诉外部下拉刷新触发了。让外部执行相关操作
      (options.refeshDataFlag&&options.refreshData) && options.refreshData(function () {
        // 刷新
        myScroll.refresh();

        //停止下拉刷新的方法
        refreshImg.src = '/public/assets/arrow.jpg';
        refreshText.innerText = '下拉可以刷新...';
        myScroll.scrollTo(0, -50 * window.devicePixelRatio, 300);
      });

    } else if (myScroll.y > -50 && myScroll.y < 0) {
      //可以看见部分下拉可以刷新的dom，收回下拉可以刷新的dom
      myScroll.scrollTo(0, -50 * window.devicePixelRatio, 300);
    } else { //myScroll.y < -50 ,正常滚动

    }
  });


  // 监听正在滚动，处理上拉加载更多
  myScroll.on('scroll', function () {
    var maxY = myScroll.maxScrollY;
    var y = myScroll.y;
    if (maxY >= y) {
      //触发了
      loadmoreImg.className = 'active';
      loadmoreText.innerText = '释放立即加载更多...';
    } else {
      //没有触发
      loadmoreImg.className = '';
      loadmoreText.innerText = '上拉可以加载更多...';
    }
    // console.log(y);
  });

  // 监听滚动停止的事件，处理上拉加载更多
  myScroll.on('scrollEnd', function () {
    var maxY = myScroll.maxScrollY;
    var minY = maxY + 50 * window.devicePixelRatio;
    var y = myScroll.y;
    // console.log('maxY:', maxY, 'y:', y);
    // console.log(y ,minY,maxY);

    if (y >= minY) {
      //正常滚动
    } else if (y < minY && y > maxY) {
      //可以看见部分上拉可以加载更多的dom结构，收回
      myScroll.scrollTo(0, minY, 300);
    } else if (y <= maxY) {
      //可以看见全部上拉可以加载更多的dom结构，触发上拉加载更多
      loadmoreImg.src = '/public/assets/loading.gif';
      loadmoreText.innerText = '正在加载中...';
      // 告诉外部触发了加载更多
      // options.loadmoreData && options.loadmoreData(function(){
     ( options.appendDataFlag&&options.appendData) && options.appendData(function () {
        // 刷新

        myScroll.refresh();
        loadmoreImg.src = '/public/assets/arrow.jpg';
        loadmoreText.innerText = '上拉可以加载更多...';
      });
    }
  });



};