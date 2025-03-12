import React from 'react';
import AlertService from './AlertService';

describe('AlertService', () => {
  let originalConsole;
  let originalWindow;
  
  beforeEach(() => {
    // Save original console methods
    originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info
    };
    
    // Mock console methods
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
    console.info = jest.fn();
    
    // Save original window methods
    originalWindow = window.confirm;
    
    // Mock window.confirm
    window.confirm = jest.fn().mockReturnValue(true);
    
    // Reset window.cloudboxAlerts
    delete window.cloudboxAlerts;
  });
  
  afterEach(() => {
    // Restore original console methods
    console.log = originalConsole.log;
    console.warn = originalConsole.warn;
    console.error = originalConsole.error;
    console.info = originalConsole.info;
    
    // Restore window properties
    window.confirm = originalWindow;
  });
  
  test('shows a default alert', () => {
    AlertService.show('Test message');
    expect(console.warn).toHaveBeenCalledWith('AlertContainer not mounted yet. Falling back to console log.');
    expect(console.log).toHaveBeenCalledWith('Test message');
  });
  
  test('shows a success alert', () => {
    AlertService.success('Success message');
    expect(console.warn).toHaveBeenCalledWith('AlertContainer not mounted yet. Falling back to console log.');
    expect(console.log).toHaveBeenCalledWith('[SUCCESS]', 'Success message');
  });
  
  test('shows an error alert', () => {
    AlertService.error('Error message');
    expect(console.warn).toHaveBeenCalledWith('AlertContainer not mounted yet. Falling back to console log.');
    expect(console.error).toHaveBeenCalledWith('Error message');
  });
  
  test('shows a warning alert', () => {
    AlertService.warning('Warning message');
    expect(console.warn).toHaveBeenCalledWith('AlertContainer not mounted yet. Falling back to console log.');
    expect(console.warn).toHaveBeenCalledWith('Warning message');
  });
  
  test('shows an info alert', () => {
    AlertService.info('Info message');
    expect(console.warn).toHaveBeenCalledWith('AlertContainer not mounted yet. Falling back to console log.');
    expect(console.info).toHaveBeenCalledWith('Info message');
  });
  
  test('calls window.cloudboxAlerts if available', () => {
    // Setup mock
    window.cloudboxAlerts = {
      show: jest.fn().mockReturnValue(1),
      success: jest.fn().mockReturnValue(2),
      error: jest.fn().mockReturnValue(3),
      warning: jest.fn().mockReturnValue(4),
      info: jest.fn().mockReturnValue(5),
      remove: jest.fn(),
      clear: jest.fn()
    };
    
    // Test all methods
    expect(AlertService.show('Test')).toBe(1);
    expect(window.cloudboxAlerts.show).toHaveBeenCalledWith('Test', {});
    
    expect(AlertService.success('Success')).toBe(2);
    expect(window.cloudboxAlerts.success).toHaveBeenCalledWith('Success', {});
    
    expect(AlertService.error('Error')).toBe(3);
    expect(window.cloudboxAlerts.error).toHaveBeenCalledWith('Error', {});
    
    expect(AlertService.warning('Warning')).toBe(4);
    expect(window.cloudboxAlerts.warning).toHaveBeenCalledWith('Warning', {});
    
    expect(AlertService.info('Info')).toBe(5);
    expect(window.cloudboxAlerts.info).toHaveBeenCalledWith('Info', {});
    
    AlertService.remove(1);
    expect(window.cloudboxAlerts.remove).toHaveBeenCalledWith(1);
    
    AlertService.clear();
    expect(window.cloudboxAlerts.clear).toHaveBeenCalled();
  });

  test('confirm method returns a Promise', () => {
    const confirmPromise = AlertService.confirm('Are you sure?');
    expect(confirmPromise).toBeInstanceOf(Promise);
  });

  test('confirm method uses window.confirm when AlertContainer not mounted', async () => {
    // Test confirm method with mocked window.confirm
    await AlertService.confirm('Are you sure?');
    expect(window.confirm).toHaveBeenCalledWith('Are you sure?');
  });

  test('confirm method rejects when user cancels', async () => {
    // Mock window.confirm to return false (cancel)
    window.confirm.mockReturnValueOnce(false);
    
    await expect(AlertService.confirm('Are you sure?')).rejects.toThrow('User cancelled');
  });

  test('progress method returns control object with expected methods', () => {
    const progressControl = AlertService.progress('Loading...');
    
    expect(progressControl).toHaveProperty('update');
    expect(progressControl).toHaveProperty('complete');
    expect(progressControl).toHaveProperty('error');
    
    expect(typeof progressControl.update).toBe('function');
    expect(typeof progressControl.complete).toBe('function');
    expect(typeof progressControl.error).toBe('function');
  });

  test('progress method falls back to console when AlertContainer not mounted', () => {
    const progressControl = AlertService.progress('Loading...');
    
    expect(console.log).toHaveBeenCalledWith('[PROGRESS]', 'Loading...');
    
    progressControl.update('Updating...', 0.5);
    expect(console.log).toHaveBeenCalledWith('[PROGRESS UPDATE]', 'Updating...', '50%');
    
    progressControl.complete('Done!');
    expect(console.log).toHaveBeenCalledWith('[PROGRESS COMPLETE]', 'Done!');
    
    progressControl.error('Failed!');
    expect(console.error).toHaveBeenCalledWith('[PROGRESS ERROR]', 'Failed!');
  });
  
  test('progress method with cloudboxAlerts available', () => {
    // Setup mock
    window.cloudboxAlerts = {
      show: jest.fn().mockReturnValue(99),
      success: jest.fn(),
      error: jest.fn(),
      remove: jest.fn(),
    };

    const progressControl = AlertService.progress('Loading...', { initialProgress: 0.2 });

    // Test initial show call
    expect(window.cloudboxAlerts.show).toHaveBeenCalled();

    // Test update method
    progressControl.update('Updating...', 0.5);
    expect(window.cloudboxAlerts.show).toHaveBeenCalledTimes(2);

    // Test complete method
    progressControl.complete('Done!');
    expect(window.cloudboxAlerts.remove).toHaveBeenCalledWith(99);
    expect(window.cloudboxAlerts.success).toHaveBeenCalledWith(
      'Done!',
      expect.objectContaining({
        autoHideDuration: 3000,
        initialProgress: 0.2,
      })
    );

    // Test error method
    progressControl.error('Failed!');
    expect(window.cloudboxAlerts.remove).toHaveBeenCalledWith(99);
    expect(window.cloudboxAlerts.error).toHaveBeenCalledWith(
      'Failed!',
      expect.objectContaining({
        autoHideDuration: 5000,
        initialProgress: 0.2,
      })
    );
  });
});