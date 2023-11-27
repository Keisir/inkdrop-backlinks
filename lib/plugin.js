'use babel';
import BacklinksDisplay from './display';
class BasePlugin {
    activate = async () => {
        inkdrop.components.registerClass(BacklinksDisplay);
        inkdrop.layouts.addComponentToLayout('editor-drawer-menu', 'BacklinksDisplay');
    };
    deactivate = async () => {
        inkdrop.layouts.removeComponentFromLayout('editor-drawer-menu', 'BacklinksDisplay');
        inkdrop.components.deleteClass(BacklinksDisplay);
    };
}
const plugin = new BasePlugin();
module.exports = {
    config: {},
    activate() {
        plugin.activate();
    },
    deactivate() {
        plugin.deactivate();
    }
};
