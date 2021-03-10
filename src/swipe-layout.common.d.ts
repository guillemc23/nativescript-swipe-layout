import { ContentView, Property } from "@nativescript/core";
import { SwipeEventData } from "./swipe-event-data";
import { GESTURE_MODE, ANIMATION_STATE } from "./swipe-layout.enums";

export declare class SwipeLayoutBase extends ContentView {
  swipeLeftEvent: string;
  swipeRightEvent: string;
  swipeUpEvent: string;
  swipeDownEvent: string;
  animationState: ANIMATION_STATE;
  gestureMode: GESTURE_MODE;
  animationDuration: number;
  private prevDelta;
  private initDelta;
  private isCurrentlyAnimated;
  private initOriginX;
  private initOriginY;
  constructor();
  private swipeGestureHandler(swipeGestureEventDataValue);
  private commonHandler(swipeDirection);
  private centerBack();
  setGestureMode(gestureModevalue: GESTURE_MODE): void;
  private panGestureHandler(panGestureEventDataValue);
  private initPaning();
  private paningHandler(panGestureEventDataValue);
  private dismissPaning(panGestureEventDataValue);
  private getEventData(direction);
  private hasSwipeLeftListener();
  private hasSwipeRightListener();
  private hasSwipeUpListener();
  private hasSwipeDownListener();
  animateSwipeLeft(): Promise<void>;
  animateSwipeRight(): Promise<void>;
  animateSwipeUp(): Promise<void>;
  animateSwipeDown(): Promise<void>;
  swipe(eventData: SwipeEventData): Promise<void>;
}
export declare const animationStateProperty: Property<
  SwipeLayoutBase,
  ANIMATION_STATE
>;
export declare const gestureModeProperty: Property<
  SwipeLayoutBase,
  GESTURE_MODE
>;
