
import { Subscription } from 'rxjs';

export function Add_Subscription_To_Subscription(
  mainSubscriber: Subscription,    // This is the single subscription
  arrayOfSubscribers: Subscription[] // Array of subscriptions to be added
): void {
  arrayOfSubscribers.forEach((subscriber) => {
    mainSubscriber?.add(subscriber); // Adds each subscription to the main subscriber
  });
}
