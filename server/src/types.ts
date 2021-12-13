export interface PoseName {
    name: string;
  }
  
  export interface Pose {
    name: string;
    xX_left_shoulder: number[];
    yY_left_shoulder: number[];
    zZ_left_shoulder: number[];
    xX_right_shoulder: number[];
    yY_right_shoulder: number[];
    zZ_right_shoulder: number[];
    xX_left_elbow: number[];
    yY_left_elbow: number[];
    zZ_left_elbow: number[];
    xX_right_elbow: number[];
    yY_right_elbow: number[];
    zZ_right_elbow: number[];
    xX_left_wrist: number[];
    yY_left_wrist: number[];
    zZ_left_wrist: number[];
    xX_right_wrist: number[];
    yY_right_wrist: number[];
    zZ_right_wrist: number[];
    xX_left_hip: number[];
    yY_left_hip: number[];
    zZ_left_hip: number[];
    xX_right_hip: number[];
    yY_right_hip: number[];
    zZ_right_hip: number[];
    xX_left_knee: number[];
    yY_left_knee: number[];
    zZ_left_knee: number[];
    xX_right_knee: number[];
    yY_right_knee: number[];
    zZ_right_knee: number[];
    xX_left_ankle: number[];
    yY_left_ankle: number[];
    zZ_left_ankle: number[];
    xX_right_ankle: number[];
    yY_right_ankle: number[];
    zZ_right_ankle: number[];
    left_shoulder__left_wrist: number[];
    right_wrist__left_wrist: number[];
    left_elbow__left_wrist: number[];
    right_elbow__right_wrist: number[];
    left_hip__left_ankle: number[];
    right_hip__right_ankle: number[];
    right_wrist__right_shoulder: number[];
    right_knee__left_knee: number[];
    right_ankle__left_ankle: number[];
    right_wrist__right_ankle: number[];
    left_wrist__left_ankle: number[];
    right_wrist__right_knee: number[];
    left_wrist__left_knee: number[];
  }
  