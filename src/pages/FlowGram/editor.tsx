import { useRef, useEffect } from 'react';
import { FreeLayoutEditorProvider, EditorRenderer, FreeLayoutPluginContext } from '@flowgram.ai/free-layout-editor';
import '@flowgram.ai/free-layout-editor/index.css'; // 加载样式
import './editor.less';

// import { NodeList } from './components/node-list';
import { defaultData, initialData } from './constants';
import { nodeRegistries } from './nodes';
import { useEditorProps } from './hooks' // 画布详细的 props 配置
import { DemoTools } from './components/tools';
import { SidebarProvider, SidebarRenderer } from './components/sidebar';
// import { debounce } from 'lodash-es'

const Editor: React.FC = () => {
  const editorProps = useEditorProps(defaultData, nodeRegistries);
  const ref = useRef<FreeLayoutPluginContext | undefined>();

  // 加载数据
  useEffect(() => {
    setTimeout(() => {
      // 初始化数据
      // ref.current?.document.fromJSON(initialData)
      ref.current?.document.reload(initialData)
    }, 1000)
    setTimeout(() => {
      // 加载后触发画布的 fitview 让节点自动居中
      ref.current?.document.fitView()
    }, 1100)
  }, [])

  // useEffect(() => {
  //   // 监听画布变化 延迟 1 秒 保存数据, 避免画布频繁更新
  //   const toDispose = ref.current?.document.onContentChange(debounce(() => {
  //       // 通过 toJSON 获取画布最新的数据
  //       const data = ref.current?.document.toJSON();
  //       console.log(data);
  //   }, 1000))
  //   return () => toDispose?.dispose()
  // }, [])

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