mkdir bin && cd bin && vim BabyShow.plist && cd .. && xcodebuild clean -project BabyShow.xcodeproj -scheme BabyShow -configuration debug && xcodebuild archive -project BabyShow.xcodeproj -scheme BabyShow -archivePath bin/BabyShow.xcarchive  && xcodebuild -exportArchive -archivePath bin/BabyShow.xcarchive -exportPath bin/ -exportOptionsPlist bin/BabyShow.plist
