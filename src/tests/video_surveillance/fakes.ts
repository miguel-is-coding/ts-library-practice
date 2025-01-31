import {MotionSensor, VideoRecorder} from "../../video_surveillance/videoSurveillance";

export class StubSensorDetectingNoMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
    }
}

export class StubSensorDetectingMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return true;
    }
}

export class SpyRecorder implements VideoRecorder {
    startCalled = false;
    stopCalled = false

    startRecording(): void {
        this.startCalled = true
    }

    stopRecording(): void {
        this.stopCalled = true
    }

}

export class FakeVideoRecorder implements VideoRecorder {
    startRecording(): void {
        console.log('start recording...')
    }

    stopRecording(): void {
        console.log('stop recording...')
    }
}
