package com.ho.stepdefinitions;

import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import com.opencsv.CSVReader;

public class ReadExcelSheet {
	
	private static String resourceDir = "./src/test/resources/";
	 
	 public static File[] readDirectory() {
		 	File folder = new File(resourceDir);
	        File[] listOfFiles = folder.listFiles();
	        return listOfFiles;
	    }

	
	public static List<String> readCsvFile(String csvfile, String column) throws Throwable {
	
		CSVReader csvReader = new CSVReader(new FileReader("./files/vehicle-data.xls"));
        String[] nextLine;
        List<String> regNames = new ArrayList<>();
        while ((nextLine = csvReader.readNext()) != null) {
            regNames.add(nextLine[0]);
        }
        return regNames;
  }

}
