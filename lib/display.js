'use babel';
import React from 'react';
export default class BacklinksDisplay extends React.Component {
    state = { id: '', backlinks: [] };
    componentWillMount = () => {
        this.updateList();
    };
    componentDidUpdate = () => {
        this.updateList();
    };
    updateList = async () => {
        if (this.state.id === inkdrop.store.getState().editingNote._id) {
            return;
        }
        const noteId = inkdrop.store.getState().editingNote._id;
        const noteLink = `inkdrop://note/${noteId.split(':').pop()}`;
        const db = inkdrop.main.dataStore.getLocalDB();
        const results = await db.utils.search(noteLink);
        const backlinkItems = results.docs.map((doc) => {
            return { id: doc._id, title: doc.title };
        });
        this.setState({ id: noteId, backlinks: backlinkItems });
    };
    render = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "editor-drawer-separator" }),
            React.createElement("div", { className: "editor-drawer-section-header" }, "Backlinks"),
            this.state.backlinks.map((backlink) => {
                return this.backlinkitem(backlink);
            })));
    };
    backlinkitem = (backlink) => {
        return (React.createElement("div", { className: "editor-drawer-item  clickable" },
            React.createElement("div", { className: "icon-container" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", name: "hyperlink-2", className: "svg-icon streamline hyperlink-2" },
                    React.createElement("path", { d: "m6.75 17.249 10.5-10.5M7.735 12.021a4.472 4.472 0 0 0-3.417 1.3l-2.25 2.25a4.5 4.5 0 0 0 6.364 6.364l2.25-2.25a4.472 4.472 0 0 0 1.3-3.417M16.265 11.976a4.473 4.473 0 0 0 3.417-1.3l2.25-2.25a4.5 4.5 0 0 0-6.364-6.364l-2.25 2.25a4.475 4.475 0 0 0-1.295 3.417", className: "hyperlink-2_svg__a" }))),
            React.createElement("div", { className: "caption", onClick: () => {
                    inkdrop.commands.dispatch(document.body, 'core:open-note', { noteId: backlink.id });
                } }, backlink.title)));
    };
}
