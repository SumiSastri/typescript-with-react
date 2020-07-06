class StopWatch {
  constructor(duration, running, startCount, endCount, resetWatch) {
    this.duration = duration;  
    this.running = running;
    this.startCount = startCount
    this.endCount = endCount
    this.resetWatch = resetWatch
  }
  
  duration(){
      return duration = 0
  }

  startWatch(running, startCount) {
    if (!running)
      throw new Error(
        "The stop-watch has not started, click the button to start"
      );
      running = true;
    return (startCount = newDate());
  }
  stopWatch(running, endCount, resetWatch) {
    if (!running)
      throw newError("Your stop-watch has not started, click the start button");
    running = false;
    endCount = newDate();
    getDuration =  (endCount.getTime()-startCount.getTime())/1000; 
    duration += getDuration;
    resetWatch();
  }

  resetWatch() {
    return {
        duration = 0,
        startCount = null,
        endCount = null,
        running = false
    }
  }
}


