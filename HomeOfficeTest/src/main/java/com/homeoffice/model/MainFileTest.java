package com.homeoffice.model;


import com.homeoffice.model.DirectoryReaderService;

public class MainFileTest {

    public static void main(String[] args) {
        //default directory name
        String dirPath="./files";
        DirectoryReaderService directoryReader = new DirectoryReaderService(dirPath);
        directoryReader.readDirectory();
        directoryReader.displayDirectoryContent();
        directoryReader.displayLargeFiles();
        directoryReader.displayFileMetaData();
        directoryReader.retrieveFilesWithSupportedMimeType();

    }

}
