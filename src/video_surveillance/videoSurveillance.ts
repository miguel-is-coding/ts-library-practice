export interface VideoRecorder {
    startRecording(): void;

    stopRecording(): void;
}

export interface MotionSensor {
    isDetectingMotion(): boolean;
}
