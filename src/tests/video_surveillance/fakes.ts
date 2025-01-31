import {MotionSensor, VideoRecorder} from "../../video_surveillance/videoSurveillance";

export class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
    }
}

export class FakeVideoRecorder implements VideoRecorder {
    startRecording(): void {
        console.log('start recording...');
    }

    stopRecording(): void {
        console.log('stop recording...');
    }
}
