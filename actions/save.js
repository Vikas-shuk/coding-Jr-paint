import { SaveAsAction } from './save-as.js';

export class SaveAction {
  execute(drawingContext) {
    // TODO: Document Context
    // TODO: Overwrite file if we have a handle, otherwise "save as"
    new SaveAsAction().execute(drawingContext);
  }
}
