import { UResource, FileService } from '../core';
import { COMMAND_FORCE_DOWNLOAD } from '../constants';
import { download } from '../fileHandlers';
import { uriFromExplorerContextOrEditorContext } from './shared';
import FileCommand from './abstract/fileCommand';

export default class ForceDownload extends FileCommand {
  static id = COMMAND_FORCE_DOWNLOAD;
  static getFileTarget = uriFromExplorerContextOrEditorContext;

  async handleFile(uResource: UResource, fileService: FileService, config: any) {
    await download(uResource, fileService, config, { ignore: null });
  }
}