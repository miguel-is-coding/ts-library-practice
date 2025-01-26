import {MotionSensor, VideoRecorder} from "./videoSurveillance";

export class VideoSurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {
    }

    recordMotion() {
        this.sensor.isDetectingMotion()
            ? this.recorder.startRecording()
            : this.recorder.stopRecording()
    }
}
