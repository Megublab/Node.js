type EventHandler = () => void;

class MyEventEmitter {
  private eventHandlers: Record<string, EventHandler[]> = {};

  registerHandler(eventName: string, handler: EventHandler): void {
    if (!(eventName in this.eventHandlers)) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
  }

  emitEvent(eventName: string): void {
    const handlers = this.eventHandlers[eventName];
    if (handlers) {
      handlers.forEach((handler) => handler());
    }
  }
}

// Приклад використання
const emitter = new MyEventEmitter();
emitter.registerHandler('userUpdated', () => console.log('Обліковий запис користувача оновлено'));
emitter.emitEvent('userUpdated'); // Обліковий запис користувача оновлено
