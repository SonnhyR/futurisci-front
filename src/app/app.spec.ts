import '@angular/compiler';
import { App } from './app';

describe('App', () => {
  it('should create the app', () => {
    const app = new App();
    expect(app).toBeTruthy();
  });

  it('should expose the FuturistCI brand name', () => {
    const app = new App();
    expect((app as any).title()).toBe('FuturistCI');
  });
});
