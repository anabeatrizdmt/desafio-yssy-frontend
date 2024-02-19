import { useEffect, useState } from "react";
import { ProcessInfo } from "../interfaces/ProcessInfo";

const useWebSocket = (url: string) => {
    const [processInfo, setProcessInfo] = useState<ProcessInfo[]>([]);

    useEffect(() => {
        const ws = new WebSocket(url);
        ws.onmessage = (event) => {
            const processData = JSON.parse(event.data);
            try {
                if (processData.type === 'initialProcessList') {
                    setProcessInfo(() => processData.processes);
                } else {
                    setProcessInfo((previousProcessInfo) => {
                        const updatedProcesses = [
                            ...previousProcessInfo,
                            ...processData.newProcesses
                        ].filter(process =>
                            !processData.terminateProcesses
                                .some((terminateProcess: ProcessInfo) => terminateProcess.processId === process.processId));
                        return updatedProcesses;
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, [url]);
    return processInfo;
};

export default useWebSocket;
