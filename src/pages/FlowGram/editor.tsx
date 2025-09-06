import { FreeLayoutEditorProvider, EditorRenderer } from '@flowgram.ai/free-layout-editor';
import '@flowgram.ai/free-layout-editor/index.css'; // 加载样式
import './editor.less';

// import { NodeList } from './components/node-list';
import { initialData } from './constants';
import { nodeRegistries } from './nodes';
import { useEditorProps } from './hooks' // 画布详细的 props 配置
import { DemoTools } from './components/tools';
import { SidebarProvider, SidebarRenderer } from './components/sidebar';

const Editor: React.FC = () => {
  const editorProps = useEditorProps(initialData, nodeRegistries);
  return (
    <FreeLayoutEditorProvider {...editorProps}>
      <SidebarProvider>
        <div className='flowgram-container'>
          <div className='flowgram-layout'>
            {/* <div className='flowgram-sidebar'>
              <NodeList />
            </div> */}
            <EditorRenderer className="flowgram-editor" />
          </div>
          <DemoTools />
          <SidebarRenderer />
        </div>
      </SidebarProvider>
    </FreeLayoutEditorProvider>
  );
}

export default Editor;