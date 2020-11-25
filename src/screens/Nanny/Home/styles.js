import React from 'react'
import styled from 'styled-components/native'

export const ScrollArea = styled.ScrollView`
    background-color: #ffffff;
`;

export const Container = styled.SafeAreaView`
    background-color: #ffffff;
    flex: 1; 
    padding-left: 20px;
    padding-right: 20px

`;

export const HeadArea = styled.View` 
    flex-direction: row;    
    padding-top: 25px; 
`;

export const NotificationIconArea = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 20px; 
    padding-bottom: 20px;
    flex: 1;
`;

export const NotificationsArea = styled.View`
    flex: 1;
    padding-top: 10px;
`;

export const NotificationBox = styled.TouchableOpacity`
    background-color: #F8BA72
    padding: 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row; 
    margin-top: 10px;
    margin-bottom: 10px;
    height: 100px;
`;
export const NotificationBoxMessage = styled.View`
    padding-right:20px;
`;
export const NearToArea = styled.View`
    padding-top: 10px;
    
`;
export const NearToItem = styled.View`
    padding: 10px;
    border: 2px solid;
    border-color: #3EC5F0;
    border-radius: 15px;
    height: 100px;
`;
export const NearToInfo = styled.View``;

export const NearToName = styled.Text``;
export const NearToBody = styled.Text``;

export const YourActivityItem = styled.View``;
export const YourActivityArea = styled.View``;
  
 