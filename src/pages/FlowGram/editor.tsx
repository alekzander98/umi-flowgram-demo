import { useRef, useEffect } from 'react';
import { FreeLayoutEditorProvider, EditorRenderer, FreeLayoutPluginContext } from '@flowgram.ai/free-layout-editor';
import '@flowgram.ai/free-layout-editor/index.css'; // 加载样式
import './editor.less';

// import { NodeList } from './components/node-list';
import { initialData } from './constants';
import { nodeRegistries } from './nodes';
import { useEditorProps } from './hooks' // 画布详细的 props 配置
import { DemoTools } from './components/tools';
import { SidebarProvider, SidebarRenderer } from './components/sidebar';

const Editor: React.FC = () => {
  const editorProps = useEditorProps({nodes:[], edges:[]}, nodeRegistries);
  const ref = useRef<FreeLayoutPluginContext | undefined>();

  useEffect(() => {
    setTimeout(() => {
      // 初始化数据
      ref.current?.document.fromJSON(initialData)
    }, 1000)
    setTimeout(() => {
      // 加载后触发画布的 fitview 让节点自动居中
      ref.current?.document.fitView()
    }, 1100)
  }, [])

  return (
    <FreeLayoutEditorProvider ref={ref as React.RefObject<FreeLayoutPluginContext>} {...editorProps}>
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